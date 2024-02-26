export default interface DataComments {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  comments: [
    {
      content: string;
      createdAt: string;
      id: number;
      replies: [
        {
          id: number;
          content: string;
          createdAt: string;
          replyingTo: string;
          score: number;
        }
      ];
      score: number;
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
    }
  ];
}
