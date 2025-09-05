"use client";
import { Listbox } from "@headlessui/react";
import { Fragment } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  label?: React.ReactNode;
  id: string;
}

export default function CustomSelect({ value, onChange, options, placeholder, label, id }: CustomSelectProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 font-semibold">{label}</label>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative w-full max-w-[480px] mx-auto">
            <Listbox.Button
              className={`w-full border border-gray-300 rounded-lg px-4 py-2 pr-8 text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#169EAD] ${!value ? 'text-[#9CA3AF]' : 'text-black'}`}
              id={id}
            >
              {value ? options.find(o => o.value === value)?.label : placeholder}
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 mt-1 w-full left-0 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none list-none max-h-60 overflow-y-auto">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  as={Fragment}
                >
                  {({ active, selected }) => (
                    <li
                      className={`cursor-pointer select-none px-4 py-2 list-none ${active ? 'bg-[#F3F4F6]' : ''} ${selected ? 'font-semibold' : ''}`}
                      style={{ listStyle: 'none' }}
                    >
                      {option.label}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        )}
      </Listbox>
    </div>
  );
}
