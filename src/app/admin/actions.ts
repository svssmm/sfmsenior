"use server";

import { db } from "@/db";
import { announcements, events } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function deleteAnnouncement(id: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  await db.delete(announcements).where(eq(announcements.id, id));
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteEvent(id: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  await db.delete(events).where(eq(events.id, id));
  revalidatePath("/");
  revalidatePath("/events");
  revalidatePath("/admin");
}

export async function createAnnouncement(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const importance = formData.get("importance") as string;

  await db.insert(announcements).values({
    title,
    content,
    importance,
  });

  revalidatePath("/");
  revalidatePath("/admin");
}

export async function createEvent(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const eventDate = new Date(formData.get("eventDate") as string);
  const location = formData.get("location") as string;
  const imageUrl = formData.get("imageUrl") as string;

  await db.insert(events).values({
    title,
    description,
    eventDate,
    location,
    imageUrl,
  });

  revalidatePath("/");
  revalidatePath("/events");
  revalidatePath("/admin");
}
