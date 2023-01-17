export interface CreateCooperatorDTO {
  name: string;
  cpf: string;
  email: string;
  active: boolean;
  admin: boolean;
  storeId: number;
  password?: string;
}
