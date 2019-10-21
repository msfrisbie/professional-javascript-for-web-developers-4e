for (let mod of mods){
  try {
    mod.init();
  } catch (ex){
    // handle error here
  }
}
