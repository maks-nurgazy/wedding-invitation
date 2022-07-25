interface Guest {
  title: string;
  name: string;
}

type Guests = Record<string, Guest>;

export const guests: Guests = {
  adinai: {
    title: 'Дорогой(ая)',
    name: 'Адинай',
  },
  adis: {
    title: 'Дорогой',
    name: 'Адис',
  },
  aiana: {
    title: 'Дорогой(ая)',
    name: 'Аяна',
  },
  aidai: {
    title: 'Дорогой(ая)',
    name: 'Айдай',
  },
  aidaibraimova: {
    title: 'Дорогой(ая)',
    name: 'Аида Ибраимова',
  },
  aijana: {
    title: 'Дорогой(ая)',
    name: 'Айжана',
  },
  'aikut-ulkan': {
    title: 'Дорогой(ая)',
    name: 'Айкут и Уулкан',
  },
  airin: {
    title: 'Дорогой(ая)',
    name: 'Айрин',
  },
  aisezim: {
    title: 'Дорогой(ая)',
    name: 'Айсезим',
  },
  aitemir: {
    title: 'Дорогой(ая)',
    name: 'Айтемир',
  },
  aizat: {
    title: 'Дорогой(ая)',
    name: 'Айзат',
  },
  aizirek: {
    title: 'Дорогой(ая)',
    name: 'Айзирек',
  },
  aktilek: {
    title: 'Дорогой(ая)',
    name: 'Актилек',
  },
  aleksandraleksandrovich: {
    title: 'Дорогой(ая)',
    name: 'Александр Александрович',
  },
  alina: {
    title: 'Дорогой(ая)',
    name: 'Алина',
  },
  'amantur-aicholpon': {
    title: 'Дорогой(ая)',
    name: 'Амантур жезде и Айчолпон эже',
  },
  annaaleksandrovna: {
    title: 'Дорогой(ая)',
    name: 'Анна Александровна',
  },
  arslan: {
    title: 'Дорогой(ая)',
    name: 'Арслан',
  },
  azamat: {
    title: 'Дорогой(ая)',
    name: 'Азамат',
  },
  begimai: {
    title: 'Дорогой(ая)',
    name: 'Бегимай',
  },
  bermet: {
    title: 'Дорогой(ая)',
    name: 'Бермет',
  },
  dastan: {
    title: 'Дорогой(ая)',
    name: 'Дастан',
  },
  'doston-kulpunai': {
    title: 'Дорогой(ая)',
    name: 'Достон и Кулпунай',
  },
  erlan: {
    title: 'Дорогой(ая)',
    name: 'Эрлан',
  },
  elena: {
    title: 'Дорогой(ая)',
    name: 'Елана',
  },
  'jeenbek-aigerim': {
    title: 'Дорогой(ая)',
    name: 'Жээнбек и Айгерим',
  },
  gulnara: {
    title: 'Дорогой(ая)',
    name: 'Гулнара',
  },
  gulbarchyn: {
    title: 'Дорогой(ая)',
    name: 'Гулбарчын',
  },
  'maisalbek-maksuda': {
    title: 'Дорогой(ая)',
    name: 'папа Майсалбек и мама Максуда',
  },
  maksat: {
    title: 'Дорогой(ая)',
    name: 'Максат',
  },
  marat: {
    title: 'Дорогой(ая)',
    name: 'Марат',
  },
  'marat-alina': {
    title: 'Дорогой(ая)',
    name: 'Марат и Алина',
  },
  meerimai: {
    title: 'Дорогой(ая)',
    name: 'Мээримай',
  },
  mirbek: {
    title: 'Дорогой(ая)',
    name: 'Мирбек',
  },
  'nurgazy-ayim': {
    title: 'Дорогой(ая)',
    name: 'Нургазы и Айым',
  },
  nurperi: {
    title: 'Дорогой(ая)',
    name: 'Нурпери',
  },
  nursultan: {
    title: 'Дорогой(ая)',
    name: 'Нурсултан',
  },
  oscar: {
    title: 'Дорогой(ая)',
    name: 'Оскар',
  },
  renat: {
    title: 'Дорогой(ая)',
    name: 'Ренат',
  },
  rustam: {
    title: 'Дорогой(ая)',
    name: 'Рустам',
  },
  saltanat: {
    title: 'Дорогой(ая)',
    name: 'Салтанат',
  },
  shaiken: {
    title: 'Дорогой(ая)',
    name: 'Шайкен',
  },
  talant: {
    title: 'Дорогой(ая)',
    name: 'Талант',
  },
  tatyana: {
    title: 'Дорогой(ая)',
    name: 'Татьяна',
  },
  tynara: {
    title: 'Дорогой(ая)',
    name: 'Тынара',
  },
  victoria: {
    title: 'Дорогой(ая)',
    name: 'Виктория',
  },
  vlad: {
    title: 'Дорогой(ая)',
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
