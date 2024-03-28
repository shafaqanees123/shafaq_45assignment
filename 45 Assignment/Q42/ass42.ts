function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  function show_magician(magicians: string[]) {
    console.log(magicians);
  }
  
  let magician: string[] = ['Arifa', 'Shaheena', 'Faheem', 'Hayat', 'Shehzad', 'Rose'];
  make_great(magician);
  show_magician(magician);