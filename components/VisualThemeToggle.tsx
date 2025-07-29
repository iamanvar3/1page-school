'use client';

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useVisualTheme } from './VisualThemeContext';
import type { Theme } from './VisualThemeContext';

const options = [
  { value: 'default', label: '🌀 Default' },
  { value: 'image', label: '🖼️ Picture' },
  { value: 'sunset', label: '🌅 Sunset' },
  { value: 'nature', label: '🌿 Nature' },
  { value: 'dark', label: '🌑 Dark' },
];

export default function VisualThemeToggle() {
  const { theme, setTheme } = useVisualTheme();
  const selected = options.find((opt) => opt.value === theme) || options[0];

  return (
    <div className="w-52">
      <Listbox value={selected} onChange={(opt) => setTheme(opt.value as Theme)}>
        <div className="relative">
          <Listbox.Button
            className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md text-sm border dark:border-gray-600 border-gray-300 focus:outline-none"
          >
            <span className="block truncate">{selected.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {options.map((opt) => (
                <Listbox.Option
                  key={opt.value}
                  value={opt}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white' : 'text-black dark:text-white'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {opt.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 dark:text-blue-400">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
