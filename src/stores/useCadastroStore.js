import { create } from "zustand";

export const useCadastroStore = create((set) => ({
  name: "",
  email: "",
  pass: "",
  bairro: "",
  rua: "",
  numero: "",

  setDadosPessoais: (dados) => set((state) => ({ ...state, ...dados })),
  setEndereco: (dados) => set((state) => ({ ...state, ...dados })),
  limpar: () => set({ name: "", email: "", pass: "", bairro: "", rua: "", numero: "" }),
}));
