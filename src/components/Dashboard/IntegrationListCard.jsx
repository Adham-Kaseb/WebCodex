import React from "react";
import { Filter, MoreHorizontal } from "lucide-react";
import "./IntegrationListCard.css";

const integrations = [
  {
    id: 1,
    name: "Stripe",
    type: "Finance",
    logo: "S",
    color: "var(--color-brand-indigo)",
    progress: 40,
    profit: "$650.00",
  },
  {
    id: 2,
    name: "Zapier",
    type: "CRM",
    logo: "Z",
    color: "#FF6B6B",
    progress: 80,
    profit: "$720.50",
  },
  {
    id: 3,
    name: "Shopify",
    type: "Marketplace",
    logo: "s",
    color: "#10B981",
    progress: 20,
    profit: "$432.25",
  },
];

const IntegrationListCard = () => {
  return (
    <div className="integration-list-card dashboard-card span-2">
      <div className="ilc-header">
        <div className="ilc-title-wrap">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ilc-icon"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span className="ilc-title">List of Integration</span>
        </div>
        <button className="ilc-see-all">See All</button>
      </div>

      <div className="ilc-table-wrap">
        <table className="ilc-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="custom-checkbox" />
              </th>
              <th>APPLICATION</th>
              <th>TYPE</th>
              <th>RATE</th>
              <th>PROFIT</th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" className="custom-checkbox" />
                </td>
                <td>
                  <div className="app-cell">
                    <div
                      className="app-logo flex-center"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      {item.logo}
                    </div>
                    <span className="app-name">{item.name}</span>
                  </div>
                </td>
                <td className="type-cell">{item.type}</td>
                <td>
                  <div className="rate-cell">
                    <div className="rate-track">
                      <div
                        className="rate-fill"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span>{item.progress}%</span>
                  </div>
                </td>
                <td className="profit-cell">{item.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationListCard;
