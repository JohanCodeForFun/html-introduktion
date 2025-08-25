# Övningsuppgifter JavaScript
- [ ] Lös uppgifter i, exercises-start.js.

- [ ] Fortsätt med övningar tillsammana med Jest.

För att komma igång med dessa tester i JavaScript, följ dessa steg:

1. **Installera Node.js och npm**:
   Se till att Node.js och npm (Node Package Manager) är installerade på din dator. Du kan ladda ner och installera dem från [Node.js officiella webbplats](https://nodejs.org/).

2. **Skapa ett nytt projekt**:
   Öppna terminalen och skapa en ny mapp för ditt projekt. Navigera till mappen och kör följande kommando för att initiera ett nytt npm-projekt:
   ```sh
   npm init -y
   ```

3. **Installera Jest**:
   Jest är ett populärt testverktyg för JavaScript. Installera det genom att köra följande kommando i terminalen:
   ```sh
   npm install --save-dev jest
   ```

4. **Konfigurera testskript**:
   Öppna `package.json`-filen och lägg till följande under "scripts":
   ```json
   "scripts": {
     "test": "jest --watch"
   }
   ```

5. **Skapa testfiler**:
   Skapa en mapp som heter `tests` och lägg in dina testfiler där. Du kan använda innehållet från [`exercises.test.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjohanhellberg%2FDocuments%2FPro-Developer%2Futbildare%2Fwebbapplikationer-java2023%2Fjava23%2FJavaScript%2Fweek-37%2Fexercises%2Fexercises.test.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/johanhellberg/Documents/Pro-Developer/utbildare/webbapplikationer-java2023/java23/JavaScript/week-37/exercises/exercises.test.js") och dela upp det i separata filer om du vill.

6. **Aktivera tester**:
   I varje testfil, avkommentera de rader som importerar funktionerna du vill testa. Till exempel, i [`add.test.js`](command:_github.copilot.openSymbolFromReferences?%5B%22add.test.js%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fjohanhellberg%2FDocuments%2FPro-Developer%2Futbildare%2Fwebbapplikationer-java2023%2Fjava23%2FJavaScript%2Fweek-37%2Fexercises%2Fexercises.test.js%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fjohanhellberg%2FDocuments%2FPro-Developer%2Futbildare%2Fwebbapplikationer-java2023%2Fjava23%2FJavaScript%2Fweek-37%2Fexercises%2Fexercises.test.js%22%2C%22path%22%3A%22%2FUsers%2Fjohanhellberg%2FDocuments%2FPro-Developer%2Futbildare%2Fwebbapplikationer-java2023%2Fjava23%2FJavaScript%2Fweek-37%2Fexercises%2Fexercises.test.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition"), avkommentera:
   ```javascript
   const add = require("./add");
   ```

7. **Kör testerna**:
   För att köra alla tester, använd följande kommando i terminalen:
   ```sh
   npm test
   ```

8. **Felsökning**:
   Om några tester misslyckas, kontrollera felmeddelandena i terminalen och justera din kod eller dina tester därefter.

Genom att följa dessa steg kan du snabbt komma igång med att köra och skriva tester i JavaScript med Jest. Lycka till!
