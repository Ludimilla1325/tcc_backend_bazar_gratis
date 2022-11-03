export interface TokenPayLoad {
    id: number;
    role: 'master' | 'cooperator' | 'admin';
    iat: number;
    exp: number;
  }