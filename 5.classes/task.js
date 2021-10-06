class PrintEditionItem {

	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount; 
		this.state = state || 100;
		this.type = type || null;  
		 
	}
		fix() {
			this.state = this.state*1.5;
			return this.state
		} 

		set state(state) {
			if (state <= 0) {
				this._state = 0
			 } else if (state >= 100 ) {
			 	this._state = 100
			 } else this._state = state
		}

		get state() {
			return this._state;
		}	
}

class Magazine extends PrintEditionItem {

	constructor(name, releaseDate, pagesCount, state) {

		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";  }

}

class Book extends PrintEditionItem {

	constructor(author, name, releaseDate, pagesCount, state) {

		super(name, releaseDate, pagesCount, state);
		this.type = "book";  
		this.author = author; }
}

class NovelBook extends Book {

	constructor(author, name, releaseDate, pagesCount, state) {

		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";  
		}
}

class FantasticBook extends Book {

	constructor(author, name, releaseDate, pagesCount, state) {

		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";  
	 }
}

class DetectiveBook extends Book {

	constructor(author, name, releaseDate, pagesCount, state,) {

		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";  
    }
}

class Library {

	constructor(name, books) {
		if (typeof name === "string") {
			this.name = name;
		}
		this.books = [];
		 
	}

	 addBook(book) {
		if (book.state >= 30) {
			this.books.push(book)
		}
	}

	 findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i]
				break
			} 
		} return null
	}

	 giveBookByName(bookName) {
		let expectedBook = null; 
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				expectedBook = this.books[i];
				this.books.splice(i,1);
			}
		} return expectedBook	
	}
}


class Student {

	constructor(name, gender, age) {
		this.name = name;
    	this.gender = gender;
    	this.age = age;
	}

	addMark(value, type) {
		if (value < 1 || value > 5){
			alert(`Оценка должна быть быть от 1 до 5`)
		} else if (this[type] === undefined) {
			this[type] = [];
			this[type].push(value);
		} else this[type].push(value);
	}

	getAverageBySubject(subject) {
		let summ = 0;
		for (let i = 0; i < this[subject].length; i++) {
			summ += this[subject][i];
		} return summ / this[subject].length
	}

	getAverage() {
		let j = 0;
		let summ = 0;
		for (const key in this) {
			if (key !== "name" && key !== "gender" && key !== "age" ) {
				for (let i = 0; i < this[key].length; i++) {
					j++;
					summ += this[key][i];
				}
			}
		} return summ / j
	}
	
}