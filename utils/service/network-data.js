import { AxiosInstance } from "axios";
import { axiosInstace } from "../axiosInstance";

export async function getAccessToken() {}

export async function doLogin({ email, password }) {
  const { data, status } = await axiosInstace.post("/auth/login", {
    email,
    password,
  });

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function doRegister({
  name,
  email,
  password,
  role,
  phone,
  gender,
  bloodType,
}) {
  const { data, status } = await axiosInstace.post("/auth/register", {
    name,
    email,
    password,
    gender,
    role,
  });

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function getUserData() {
  const { data, status } = await axiosInstace.get("/users/me", {
    headers: `Bearer ${getAccessToken()}`,
  });

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function getUserById({ id }) {
  const { data, status } = await axiosInstace.get(`/users/${id}`);

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function getUserAppointment() {
  const { data, status } = await axiosInstace.get("/users/appointments", {
    headers: `Bearer ${getAccessToken()}`,
  });

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function getAllDoctor() {
  const { data, status } = await axiosInstace.get("/doctors");

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function getDoctorById({ id }) {
  const { data, status } = await axiosInstace.get(`/doctors/${id}`);

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function getAllBookings({ id }) {
  const { data, status } = await axiosInstace.get("/bookings");

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function getBookingById({ id }) {
  const { data, status } = await axiosInstace.get(`/bookings/${id}`);

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function createBooking({ id }) {
  const { data, status } = await axiosInstace.post("/bookings");

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}

export async function deleteBooking({ id }) {
  const { data, status } = await axiosInstace.delete(`/bookings/${id}`);

  if (status >= 400 && status <= 499) {
    throw new Error();
  }

  return { data };
}
