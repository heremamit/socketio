export interface NameSpaceValues {
  name: string;
  room: {
    name: string;
  }[];
}
export class NameSpaces {
  private namespaces: NameSpaceValues[] = [
    {
      name: 'booking',
      room: [
        {
          name: '123',
        },
      ],
    },
  ];
  public get nameSpaceList(): NameSpaceValues[] {
    return this.namespaces;
  }
  public roomsForNameSpace(ns) {
    return this.namespaces.find(item => item.room).room;
  }
}
