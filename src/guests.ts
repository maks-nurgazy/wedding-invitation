interface Guest {
  title: string;
  name: string;
}

type Guests = Record<string, Guest>;

export const guests: Guests = {
  adinai: {
    title: 'Дорогая',
    name: 'Адинай',
  },
  adis: {
    title: 'Дорогой',
    name: 'Адис',
  },
  aiana: {
    title: 'Дорогая',
    name: 'Аяна',
  },
  aidai: {
    title: 'Дорогая',
    name: 'Айдай',
  },
  aidaibraimova: {
    title: 'Дорогая',
    name: 'Аида Ибраимова',
  },
  aijana: {
    title: 'Дорогая',
    name: 'Дастан и Кулпунай',
  },
  'aikut-ulkan': {
    title: 'Дорогие',
    name: 'Айжана',
  },
  airin: {
    title: 'Дорогая',
    name: 'Айрин',
  },
  aisezim: {
    title: 'Дорогая',
    name: 'Айсезим',
  },
  aitemir: {
    title: 'Дорогая',
    name: 'Айтемир',
  },
  aizat: {
    title: 'Дорогая',
    name: 'Айзат',
  },
  aizirek: {
    title: 'Дорогая',
    name: 'Айзирек',
  },
  aktilek: {
    title: 'Дорогой',
    name: 'Актилек',
  },
  aleksandraleksandrovich: {
    title: 'Дорогие',
    name: 'Александр Александрович',
  },
  alina: {
    title: 'Дорогая',
    name: 'Алина',
  },
  'amantur-aicholpon': {
    title: 'Дорогие',
    name: 'Амантур жезде и Айчолпон эже',
  },
  annaaleksandrovna: {
    title: 'Дорогая',
    name: 'Анна Александровна',
  },
  arslan: {
    title: 'Дорогой',
    name: 'Арслан',
  },
  azamat: {
    title: 'Дорогой',
    name: 'Азамат',
  },
  begimai: {
    title: 'Дорогая',
    name: 'Бегимай',
  },
  bermet: {
    title: 'Дорогая',
    name: 'Бермет',
  },
  dastan: {
    title: 'Дорогой',
    name: 'Дастан',
  },
  'dastan-kulpunai': {
    title: 'Дорогие',
    name: 'Дастан и Кулпунай',
  },
  erlan: {
    title: 'Дорогой',
    name: 'Эрлан',
  },
  elena: {
    title: 'Дорогая',
    name: 'Елана',
  },
  'jeenbek-aigerim': {
    title: 'Дорогие',
    name: 'Жээнбек и Айгерим',
  },
  gulnara: {
    title: 'Дорогая',
    name: 'Гулнара',
  },
  gulbarchyn: {
    title: 'Дорогая',
    name: 'Гулбарчын',
  },
  'maisalbek-maksuda': {
    title: 'Дорогие',
    name: 'папа Майсалбек и мама Максуда',
  },
  maksat: {
    title: 'Дорогой',
    name: 'Максат',
  },
  marat: {
    title: 'Дорогой',
    name: 'Марат',
  },
  meerimai: {
    title: 'Дорогая',
    name: 'Мээримай',
  },
  mirbek: {
    title: 'Дорогой',
    name: 'Мирбек',
  },
  'nurgazy-ayim': {
    title: 'Дорогие',
    name: 'Нургазы и Айым',
  },
  nurperi: {
    title: 'Дорогая',
    name: 'Нурпери',
  },
  nursultan: {
    title: 'Дорогой',
    name: 'Нурсултан',
  },
  oscar: {
    title: 'Дорогой',
    name: 'Оскар',
  },
  renat: {
    title: 'Дорогой',
    name: 'Ренат',
  },
  rustam: {
    title: 'Дорогой',
    name: 'Рустам',
  },
  saltanat: {
    title: 'Дорогая',
    name: 'Салтанат',
  },
  shaiken: {
    title: 'Дорогой',
    name: 'Шайкан',
  },
  talant: {
    title: 'Дорогой',
    name: 'Талант',
  },
  tatyana: {
    title: 'Дорогая',
    name: 'Татьяна',
  },
  tynara: {
    title: 'Дорогая',
    name: 'Тынара',
  },
  victoria: {
    title: 'Дорогая',
    name: 'Виктория',
  },
  vlad: {
    title: 'Дорогой',
    name: 'Влад',
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
