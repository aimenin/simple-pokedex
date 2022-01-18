import { makeAutoObservable } from "mobx";

const AppStore = () => makeAutoObservable({
  searchQuery: "",
  scrollPostionY: 0,
  handleSearchQueryChange(value: string) {
    this.searchQuery = value;
  },
  handleScrollPositionChange(value: number) {
    this.scrollPostionY = value;
  }
});

export default AppStore;