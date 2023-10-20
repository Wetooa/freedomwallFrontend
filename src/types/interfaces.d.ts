

export interface InputDataProps  {
  codeName: string;
  message: string;
}

export interface  DataProps extends InputDataProps {
  _id: Key | null | undefined;
  createdAt: string;
  updatedAt: string;
}