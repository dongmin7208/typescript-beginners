interface Word {
  term: string;
  definition: string;
}

class Dict {
  private words: Word[];

  constructor() {
    this.words = [];
  }

  public add(word: Word): void {
    this.words.push(word);
  }

  public get(term: string): string | null {
    const word = this.words.find((w) => w.term === term);
    return word ? word.definition : null;
  }

  public delete(term: string): void {
    this.words = this.words.filter((w) => w.term !== term);
  }

  public update(term: string, definition: string): void {
    const word = this.words.find((w) => w.term === term);
    if (word) {
      word.definition = definition;
    } else {
      this.add({ term, definition });
    }
  }

  public showAll(): void {
    console.log(this.words);
  }

  public count(): number {
    return this.words.length;
  }

  public exists(term: string): boolean {
    return this.words.some((w) => w.term === term);
  }

  public bulkAdd(words: Word[]): void {
    this.words.push(...words);
  }

  public bulkDelete(terms: string[]): void {
    this.words = this.words.filter((w) => !terms.includes(w.term));
  }
}
