
import { ChangeEvent, useState } from 'react';
import './AutoCompleteBar.css';

interface ItemProps {
  name: string;
  code: string;
}

interface DataProps {
  data: any[];
}

interface SuggestionsProps {
  text: string,
  suggestions: Array<any>,
}

export function AutoCompleteBar({ data }: DataProps) {

  const [search, setSearch] = useState<SuggestionsProps>();

  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      suggestions = data.filter(itemData => {
        return itemData.name.toLowerCase().includes(value.toLowerCase())
      })

    }
    setSearch({ text: value, suggestions });
  };

  const suggestionSelected = (value: ItemProps) => {
    setSearch({
      text: value.name,
      suggestions: []
    });
  };

  return (
    <div className="container">
      <h1>Autocomplete Box</h1>
        <input
          id="input"
          autoComplete="off"
          value={search?.text}
          onChange={onTextChanged}
          type={"text"}
        />
      {search && (
        <ul>
          {search?.suggestions.map((item: ItemProps) => (
            <li key={item.code}>
              <button onClick={() => suggestionSelected(item)} >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}