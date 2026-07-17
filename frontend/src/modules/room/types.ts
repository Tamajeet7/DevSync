export interface Room {
  id: string;
  name: string;
  language: string;
  ownerId: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRoomRequest {
  name: string;
  language: string;
}

export interface CreateRoomResponse {
  id: string;
  name: string;
  language: string;
  ownerId: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}