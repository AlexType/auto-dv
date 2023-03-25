export interface UserRequestDto {
  _id: string;
  name: string,
  number: string,
  comment: string,
  called: boolean,
  adminMark: string;
  dateCreated: Date;
}
