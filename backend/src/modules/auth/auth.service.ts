import bcrypt from "bcrypt";
import { prisma } from "../../config/db";
import { generateToken } from "../../utils/jwt";


export class AuthService {
  static async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    console.log("Prisma Test Started");

    const users = await prisma.user.findMany();

    console.log(users);

    console.log("Prisma Test Finished");
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  static async login(data: {
    email: string;
    password: string;
  }) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const validPassword = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!validPassword) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}