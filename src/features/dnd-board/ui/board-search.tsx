import { UiTextField } from "@/shared/ui/ui-text-field";
import { useBoardSearch } from "../model/board-search.store";

export function BoardSearch({ className }: { className?: string }) {
  const { query, setQuery } = useBoardSearch((selector) => selector);

  return (
    <UiTextField
      className={className}
      inputProps={{
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "Поиск",
      }}
    />
  );
}
