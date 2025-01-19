import React, { useState } from "react";

const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", label: "English - EN" },
    { code: "hi", label: "हिंदी - HI - अनुवाद" },
    { code: "ta", label: "தமிழ் - TA - மொழிபெயர்ப்பு" },
    { code: "te", label: "తెలుగు - TE - అనువాదం" },
    { code: "kn", label: "ಕನ್ನಡ - KN - ಭಾಷಾಂತರ" },
    { code: "ml", label: "മലയാളം - ML - വിവർത്തനം" },
    { code: "bn", label: "বাংলা - BN - অনুবাদ" },
    { code: "mr", label: "मराठी - MR - भाषांतर" },
  ];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSave = () => {
    alert(`Language saved: ${selectedLanguage}`);
  };

  const handleCancel = () => {
    setSelectedLanguage("en"); // Reset to default language
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Language Settings</h2>
      <p>
        Select the language you prefer for browsing, shopping, and
        communications.
      </p>
      <form>
        {languages.map((lang) => (
          <div key={lang.code} style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="radio"
                value={lang.code}
                checked={selectedLanguage === lang.code}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              {lang.label}
            </label>
          </div>
        ))}
        <div style={{ marginTop: "20px" }}>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ffcc00",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default LanguageSettings;
