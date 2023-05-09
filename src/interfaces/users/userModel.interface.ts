export interface UserModelInterface {
  cedula: string;
  cod_universitario: number;
  correo_est: string;
  contrasena: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  visibilidad: string;
  correo_personal: string;
  semillero_id: number;
  programa_id: number;
  nombre?: string;
  tipo_usuario?: string;
  descripcion?: string
}

export interface LoginRequestInterface {
  institutionalEmail: string;
  password: string;
}
