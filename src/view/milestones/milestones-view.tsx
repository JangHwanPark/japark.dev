import React from 'react';

export const MilestonesView = () => {
  return (
    <section id="milestone-section">
      <header>
        <h2>Career timeline</h2>
      </header>
      {/* Content: TimeLine */}
      <div>
        <ol>
          <li>
            <div>
              <div>
                <h3>position</h3>
                <h4>company-name</h4>
              </div>
              <time>year</time>
            </div>
            <p>description</p>
          </li>
        </ol>
      </div>
    </section>
  );
};
