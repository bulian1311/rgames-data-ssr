export type TItemsActionType = 'search' | 'filter';

export type TState = {
  searchQery: string;
  activeTags: string[];
};

export type TItemsAction = {
  type: TItemsActionType;
  payload: string;
};

export const itemsReducer = (
  state: TState,
  { type, payload }: TItemsAction
): TState => {
  switch (type) {
    case 'search':
      return {
        ...state,
        searchQery: payload,
      };

    case 'filter':
      const existTag = state.activeTags.includes(payload);

      if (!existTag) {
        return { ...state, activeTags: [...state.activeTags, payload] };
      } else {
        const filteredTags = state.activeTags.filter((tag) => tag !== payload);
        return { ...state, activeTags: filteredTags };
      }
    default:
      throw new Error('Ошибка сортировки!');
  }
};
