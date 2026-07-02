export type DocumentType = "cpf" | "cnpj";

export type SignupFormData = {
  tenantName: string;
  tenantEmail: string;
  ownerName: string;
  ownerEmail: string;
  phone: string;
  document: string;
};

export type SignupPayload = {
  tenant_name: string;
  tenant_email: string;
  owner_name: string;
  owner_email: string;
  phone: string;
  document: string;
  plan_code: string;
};

export type SignupRequestStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";

export type SignupRequest = {
  id: string;
  status: SignupRequestStatus;
  tenant_id: string | null;
  subscription_id: string | null;
  failure_reason: string | null;
  processed_at: string | null;
};

const onlyDigits = (value: string) => value.replace(/\D/g, "");

export const detectDocumentType = (value: string): DocumentType => {
  return onlyDigits(value).length > 11 ? "cnpj" : "cpf";
};

export const isValidCpf = (value: string) => {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const digits = cpf.split("").map(Number);
  const calculateDigit = (base: number[], factor: number) => {
    const sum = base.reduce((acc, digit) => {
      const result = acc + digit * factor;
      factor -= 1;
      return result;
    }, 0);

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstDigit = calculateDigit(digits.slice(0, 9), 10);
  const secondDigit = calculateDigit(digits.slice(0, 10), 11);

  return firstDigit === digits[9] && secondDigit === digits[10];
};

export const isValidCnpj = (value: string) => {
  const cnpj = onlyDigits(value);

  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  const digits = cnpj.split("").map(Number);

  const calculateDigit = (base: number[]) => {
    const weights =
      base.length === 12
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const sum = base.reduce((acc, digit, index) => acc + digit * weights[index], 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstDigit = calculateDigit(digits.slice(0, 12));
  const secondDigit = calculateDigit(digits.slice(0, 13));

  return firstDigit === digits[12] && secondDigit === digits[13];
};

export const isValidDocument = (value: string) => {
  const documentType = detectDocumentType(value);
  return documentType === "cnpj" ? isValidCnpj(value) : isValidCpf(value);
};

export const formatDocument = (value: string) => {
  const digits = onlyDigits(value);

  if (digits.length > 11) {
    return digits
      .slice(0, 14)
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }

  return digits
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const formatPhone = (value: string) => {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

export const normalizeSignupData = (input: SignupFormData): SignupFormData => ({
  tenantName: input.tenantName.trim(),
  tenantEmail: input.tenantEmail.trim().toLowerCase(),
  ownerName: input.ownerName.trim(),
  ownerEmail: input.ownerEmail.trim().toLowerCase(),
  phone: onlyDigits(input.phone),
  document: onlyDigits(input.document),
});

export const buildSignupPayload = (input: SignupFormData, planCode: string): SignupPayload => {
  const data = normalizeSignupData(input);

  return {
    tenant_name: data.tenantName,
    tenant_email: data.tenantEmail,
    owner_name: data.ownerName,
    owner_email: data.ownerEmail,
    phone: data.phone,
    document: data.document,
    plan_code: planCode,
  };
};

export const validateSignupData = (input: unknown):
  | { ok: true; data: SignupFormData }
  | { ok: false; message: string } => {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Dados inválidos para cadastro." };
  }

  const candidate = input as Partial<SignupFormData>;

  if (
    !candidate.tenantName ||
    !candidate.tenantEmail ||
    !candidate.ownerName ||
    !candidate.ownerEmail ||
    !candidate.phone ||
    !candidate.document
  ) {
    return { ok: false, message: "Preencha todos os campos obrigatórios." };
  }

  const data = normalizeSignupData({
    tenantName: String(candidate.tenantName),
    tenantEmail: String(candidate.tenantEmail),
    ownerName: String(candidate.ownerName),
    ownerEmail: String(candidate.ownerEmail),
    phone: String(candidate.phone),
    document: String(candidate.document),
  });

  if (data.tenantName.length < 2) {
    return { ok: false, message: "Informe o nome da associação." };
  }

  if (!/\S+@\S+\.\S+/.test(data.tenantEmail)) {
    return { ok: false, message: "E-mail da associação inválido." };
  }

  if (data.ownerName.length < 3) {
    return { ok: false, message: "Informe o nome do responsável." };
  }

  if (!/\S+@\S+\.\S+/.test(data.ownerEmail)) {
    return { ok: false, message: "E-mail do responsável inválido." };
  }

  if (data.phone.length < 10 || data.phone.length > 11) {
    return { ok: false, message: "Telefone inválido." };
  }

  if (!isValidDocument(data.document)) {
    return { ok: false, message: detectDocumentType(data.document) === "cnpj" ? "CNPJ inválido." : "CPF inválido." };
  }

  return { ok: true, data };
};

export const validateActivationData = (input: unknown):
  | { ok: true; data: { token: string; password: string; confirmPassword?: string } }
  | { ok: false; message: string } => {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Dados inválidos para ativação." };
  }

  const candidate = input as { token?: string; password?: string; confirmPassword?: string };
  const token = String(candidate.token ?? "").trim();
  const password = String(candidate.password ?? "");
  const confirmPassword = String(candidate.confirmPassword ?? "");

  if (!token) {
    return { ok: false, message: "Token de ativação inválido." };
  }

  if (password.length < 8) {
    return { ok: false, message: "A senha deve ter pelo menos 8 caracteres." };
  }

  if (candidate.confirmPassword !== undefined && password !== confirmPassword) {
    return { ok: false, message: "As senhas não coincidem." };
  }

  return { ok: true, data: { token, password, confirmPassword } };
};
