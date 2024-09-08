export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (name === "" || name.trim() === "") {
    return "Nama tidak boleh kosong.";
  }
  if (!nameRegex.test(name)) {
    return "Nama hanya boleh berisi huruf.";
  }
  return "";
};

export const validateMessage = (message) => {
  if (!message || message.trim() === "") {
    return "Pesan tidak boleh kosong";
  }

  // Cek panjang pesan (batas minimal 5 karakter)
  if (message.length < 5) {
    return "Pesan terlalu pendek (minimal 5 karakter)";
  }

  // Mengizinkan emotikon dengan regex unicode
  const regex = /^[\p{L}\p{N}\p{P}\p{Z}\p{M}\p{S}]+$/u;
  if (!regex.test(message)) {
    return "Pesan mengandung karakter yang tidak valid";
  }

  return "";
};
