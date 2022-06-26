export const weddingInfo: WeddingInfo = {
  bride: {
    firstName: 'Арген',
  },
  groom: {
    firstName: 'Жанара',
  },
  date: new Date('08/24/2022 00:00:00'),
};

interface WeddingInfo {
  bride: {
    firstName: string;
  };
  groom: {
    firstName: string;
  };
  date: Date;
}
