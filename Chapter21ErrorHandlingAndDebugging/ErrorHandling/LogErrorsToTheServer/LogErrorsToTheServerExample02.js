for (let mod of mods){
  try {
    mod.init();
  } catch (ex){
    logError("nonfatal", `Module init failed: ${ex.message}`);
  }
}
