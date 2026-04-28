import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const isValid = tabs.some(tab => tab.id === activeTabId);
  const selectedTabId = isValid ? activeTabId : tabs[0].id;
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

                  if (tab.id !== selectedTabId) {
                    onTabSelected?.(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </>
  );
};
