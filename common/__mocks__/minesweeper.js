class FakeSweeper {
  constructor() {
    this.size = 9;
    this.isBlown = false;
    this.minefield = {
      rows: [],
      id: 'fake-id'
    };

    this.hasWon = jest.fn(() => true);
    this.hasLost = jest.fn(() => false);
  }

  remainingBombs() {
    return 0;
  }
};

export default FakeSweeper;