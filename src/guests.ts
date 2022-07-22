interface Guest {
  title: string;
  name: string;
}

type Guests = Record<string, Guest>;

export const guests: Guests = {
  aika: {
    title: 'Дорогая',
    name: 'Айгерим',
  },
  maks: {
    title: 'Дорогой',
    name: 'Максатбек',
  },
  tilek: {
    title: 'Дорогой',
    name: 'Тилек',
  },
  uli: {
    title: 'Дорогая',
    name: 'Уулжан',
  },
};

export const defaultGuest: Guest = {
  title: 'Дорогой(ая)',
  name: '',
};

export function getGuest(id: string): Guest {
  return guests[id] || defaultGuest;
}

export function hasInvited(id: string): boolean {
  return Object.keys(guests).includes(id);
}

// У НАС СВАДЬБА 24 август 2022 город Каракол
