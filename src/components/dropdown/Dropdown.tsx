import React, { useState } from 'react';
import "./dropdown.css";

interface DropdownProps {
  options: {label: string, value: string | number | undefined}[];
  callback: (value: string | number | undefined) => void;
  title?: string;
  placeholder?: string;
}

function FilterDropdown({ options, title, callback, placeholder = "Pesquisar..." }: DropdownProps) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options.map(item => item.label));
  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);

    const newFilteredOptions = options.filter(option => option.label.toLowerCase().includes(query.toLowerCase()));
    setFilteredOptions(newFilteredOptions?.map(item => item.label));
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    const value = options.find(op => op.label === option)?.value
    setSearch(option);
    callback(value)
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      {title &&
        <div className='title-container'>
          <span>{title}</span>
        </div>
      }
      <input
        type="text"
        className="dropdown-input"
        value={search}
        onChange={handleSearchChange}
        onClick={handleToggleDropdown}
        placeholder={placeholder}
      />
      {isOpen && search && (
        <ul className="dropdown-list">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))
          ) : (
            <li className="dropdown-item">Nenhuma opção encontrada</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
