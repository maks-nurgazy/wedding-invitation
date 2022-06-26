export const weddingInfo: WeddingInfo = {
  bride: {
    firstName: 'Арген',
  },
  groom: {
    firstName: 'Жанара',
  },
  date: new Date('08/22/2022 23:59:59'),
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
