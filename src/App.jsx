import React, { useState } from 'react';
import './App.css';

export default function App() {
  // Accordion state
  const [openAccordion, setOpenAccordion] = useState(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Form states & dynamic error injection
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ itemName: '', category: '', quantity: '' });
  const [formError, setFormError] = useState('');

  // Infinite/Dynamic Feed state
  const [feedItems, setFeedItems] = useState([
    'System initialized successfully.',
    'Inventory sync completed.'
  ]);

  const generateLargeTableData = () => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push({
        id: i,
        name: `Asset Item #${i}`,
        category: i % 2 === 0 ? 'Pharmaceuticals' : 'Hardware',
        status: i % 3 === 0 ? 'Critical' : 'Stable',
        stock: Math.floor(Math.random() * 1000)
      });
    }
    return data;
  };

  const [tableData] = useState(generateLargeTableData());

  const handleNextStep = () => {
    if (step === 1 && !formData.itemName) {
      setFormError('Item name is required to proceed.');
      return;
    }
    setFormError('');
    setStep(step + 1);
  };

  const handleAddFeedItem = () => {
    setFeedItems(prev => [
      `New telemetry event logged at ${new Date().toLocaleTimeString()}`,
      ...prev
    ]);
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Supply Chain Baseline Dashboard (Unoptimized CSR)</h1>
        <p>Testing baseline DOM performance and accessibility metrics.</p>
      </header>

      {/* FEATURE 1: Non-Accessible Accordion (Uses divs instead of native buttons, missing aria attributes) */}
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
        >
          ► Quick System Overview & Telemetry (Click to Toggle)
        </div>
        {openAccordion === 1 && (
          <div className="accordion-content">
            <p>System operational status: Nominal. Database connections active.</p>
            <button onClick={handleAddFeedItem}>Simulate Real-time Log Injection</button>
          </div>
        )}
      </div>

      {/* FEATURE 2: Multi-Step Form */}
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
        >
          ► Inventory Intake Wizard (Multi-Step Form)
        </div>
        {openAccordion === 2 && (
          <div className="accordion-content">
            {step === 1 && (
              <div>
                <h3>Step 1: Basic Info</h3>
                <div className="form-group">
                  <label>Item Name</label>
                  <input
                    type="text"
                    value={formData.itemName}
                    onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                    placeholder="Enter item name..."
                  />
                  {formError && <span className="error-text">{formError}</span>}
                </div>
                <button onClick={handleNextStep}>Next Step</button>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3>Step 2: Details & Confirmation</h3>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select Category</option>
                    <option value="Pharma">Pharmaceuticals</option>
                    <option value="Hardware">Hardware</option>
                  </select>
                </div>
                <button onClick={() => { setStep(1); setFormData({ itemName: '', category: '', quantity: '' }); }}>Reset Form</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* FEATURE 3: Dynamic Activity Feed */}
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
        >
          ► Live Activity Stream (Infinite Feed)
        </div>
        {openAccordion === 3 && (
          <div className="accordion-content">
            <div className="feed-container">
              {feedItems.map((item, index) => (
                <div key={index} className="feed-item">{item}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FEATURE 4: Large Data Table */}
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => setOpenAccordion(openAccordion === 4 ? null : 4)}
        >
          ► Full Asset Catalog Table (500 Unvirtualized Rows)
        </div>
        {openAccordion === 4 && (
          <div className="accordion-content" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Asset Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.category}</td>
                    <td>{row.status}</td>
                    <td>{row.stock}</td>
                    <td>
                      <button onClick={() => { setSelectedItem(row); setIsModalOpen(true); }}>
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* FEATURE 5: Unmanaged Modal Dialog */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Asset Inspection Details</h2>
            {selectedItem ? (
              <div>
                <p><strong>ID:</strong> {selectedItem.id}</p>
                <p><strong>Name:</strong> {selectedItem.name}</p>
                <p><strong>Category:</strong> {selectedItem.category}</p>
                <p><strong>Status:</strong> {selectedItem.status}</p>
                <p><strong>Current Stock Level:</strong> {selectedItem.stock} units</p>
              </div>
            ) : (
              <p>No item selected.</p>
            )}
            <button style={{ marginTop: '15px' }} onClick={() => setIsModalOpen(false)}>
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
