import { create } from "zustand";
import { useAuthStore } from "./useAuthStore"; // ajuste o caminho conforme sua estrutura

export const useCarrinhoStore = create((set, get) => ({
  itens: [],
  cartId: null,

  // Carregar carrinho do backend
  carregarCarrinho: async () => {
    try {
      const token = useAuthStore.getState().token; // pega direto do auth
      if (!token) return;

      const resCart = await fetch("http://localhost:3333/api/cart/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const cart = await resCart.json();
      const id = cart.id || cart.id_cart;
      if (!id) return;

      set({ cartId: id });

      const resItems = await fetch(`http://localhost:3333/api/cart/${id}/items`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const rawItems = await resItems.json();

      const mapped = Array.isArray(rawItems)
        ? rawItems.map((row) => ({
            id: row.pratos_id,
            quantidade: Number(row.quantidade),
            preco: Number(row.pratos?.preco) || 0,
            nome: row.pratos?.nome || "Sem nome",
            imagem: row.pratos?.imagem || "/logo.png",
          }))
        : [];

      set({ itens: mapped });
    } catch (err) {
      console.error("Erro ao carregar carrinho:", err);
      set({ itens: [] });
    }
  },

  // Adicionar item
  adicionarItem: async (produto) => {
    const { cartId } = get();
    const token = useAuthStore.getState().token; // pega direto do auth
    if (!token) {
      alert("Você precisa estar logado para adicionar produtos ao carrinho.");
      return;
    }
    if (!cartId) return;

    await fetch(`http://localhost:3333/api/cart/${cartId}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ pratos_id: produto.id, quantidade: 1 }),
    });

    await get().carregarCarrinho(); // refetch
  },

  // Remover item
  removerItem: async (id) => {
    const { cartId } = get();
    const token = useAuthStore.getState().token;
    if (!token || !cartId) return;

    await fetch(`http://localhost:3333/api/cart/${cartId}/items/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    set((state) => ({
      itens: state.itens.filter((item) => item.id !== id),
    }));
  },

  // Atualizar quantidade
  atualizarQuantidade: async (id, qtd) => {
    const { cartId } = get();
    const token = useAuthStore.getState().token;
    if (!token || !cartId) return;

    if (qtd <= 0) return get().removerItem(id);

    await fetch(`http://localhost:3333/api/cart/${cartId}/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ quantidade: qtd }),
    });

    set((state) => ({
      itens: state.itens.map((item) =>
        item.id === id ? { ...item, quantidade: qtd } : item
      ),
    }));
  },

  // Limpar carrinho
  limparCarrinho: () => set({ itens: [], cartId: null }),
}));
