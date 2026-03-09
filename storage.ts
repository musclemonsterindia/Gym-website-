import { db } from "./db";
import { contacts, type CreateContactRequest, type ContactResponse } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContact(contact: CreateContactRequest): Promise<ContactResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: CreateContactRequest): Promise<ContactResponse> {
    const [newContact] = await db.insert(contacts)
      .values(contact)
      .returning();
    return newContact;
  }
}

export const storage = new DatabaseStorage();
