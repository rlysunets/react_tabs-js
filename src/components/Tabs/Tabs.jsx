export const Tabs = ({ tabs, setActiveTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li className="is-active" data-cy="Tab" key={tab.id}>
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
