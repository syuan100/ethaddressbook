export default () => (
  <div>
    Contract Test Code<br /><br />

    <div className="import-console">
      IMPORT WALLET<br />
      <input type="file" className="input-wallet"></input><br />
      <input type="submit" className="input-wallet-submit"></input><br /><br />
    </div>

    Current Address: <div id="current-address"></div><br />
    Current Hash for Address: <div id="hash-for-address"></div><br /><br />

    <form id="store-swarm-data">
      Text to store:<br /><textarea name="message" rows="10" cols="30" id="data-to-encrypt"></textarea><br />
      Enter Password:<br /><input name="message" type="password" id="encrypt-password" />
    </form>

    <div id="button-box">
      <span id="encrypt">Encrypt</span>
    </div>

    <form id="encrypted-text">
      Stored Text:<br /><textarea name="message" rows="10" cols="30" id="stored-text-box"></textarea><br />
      Enter Password:<br /><input name="message" type="password" id="decrypt-password" />
    </form>

    <div id="button-box">
      <span id="get-address-book">Get Book</span>
    </div>



    <style jsx>{`
      #button-box  {
        margin: 20px 0;
        width: 100px;
        height: 40px;
        color: white;
        background-color: black;
        text-align: center;
        display: inline-block;
        cursor: pointer;
      }
      #button-box span {
        display: inline-block;
        vertical-align: middle;
      }
    `}</style>

  </div>
) 