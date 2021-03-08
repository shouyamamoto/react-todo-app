import './App.css'

function App() {
  return (
    <div className="App">
      <div class="input-area">
        <input type="text" placeholder="TODOを入力" id="add-text" />
        <button id="add-button">追加</button>
      </div>

      <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-todos">
          <div class="list-row">
            <li>あああああ</li>
            <button class="complete-button">完了</button>
            <button class="delete-button">削除</button>
          </div>
          <div class="list-row">
            <li>いいいいいいい</li>
            <button class="complete-button">完了</button>
            <button class="delete-button">削除</button>
          </div>
        </ul>
      </div>

      <div class="complete-area">
        <p class="title">完了したTODO</p>
        <ul id="complete-todos">
          <div class="list-row">
            <li>うううう</li>
            <button class="back-btn">戻す</button>
          </div>
        </ul>
      </div>      
    </div>
  );
}

export default App;
