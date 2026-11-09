import { useState } from "react";
import { Bell, CircleUserRound, Clock3, LockKeyhole, LogOut } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import Button from "../components/ui/Button.jsx";
import Field from "../components/ui/Field.jsx";
import Toggle from "../components/ui/Toggle.jsx";
import LevelCard from "../components/settings/LevelCard.jsx";
import SettingRow from "../components/settings/SettingRow.jsx";
import SettingsSection from "../components/settings/SettingsSection.jsx";
import { useApp } from "../context/AppContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

export default function SettingsPage() {
  const { user, stats, updateName, logout } = useApp();
  const toast = useToast();
  const [name, setName] = useState(user.name);
  const [reminders, setReminders] = useState({ daily: true, email: true, browser: false, time: "19:00" });
  const setReminder = (key, value) => setReminders((r) => ({ ...r, [key]: value }));

  const saveProfile = () => {
    const clean = name.trim().replace(/\s+/g, " ");
    if (!clean) return toast("Enter a name before saving.");
    updateName(clean);
    setName(clean);
    toast("Profile changes saved");
  };

  return (
    <div className="page settings-page">
      <PageHeader
        eyebrow="Your space"
        title="Profile & settings"
        subtitle="Set up StudyQuest to work with your routine."
      />
      <div className="settings-grid">
        <div className="settings-main">
          <SettingsSection icon={CircleUserRound} title="Profile" description="Your account details.">
            <div className="form-grid">
              <Field label="Display name">
                <input value={name} maxLength={60} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field
                label="Email address"
                hint={
                  <>
                    <LockKeyhole size={13} /> Email can’t be changed here
                  </>
                }
              >
                <input value={user.email} readOnly />
              </Field>
            </div>
            <Button onClick={saveProfile}>Save changes</Button>
          </SettingsSection>

          <SettingsSection icon={Bell} title="Study reminders" description="A gentle nudge when it’s time to review.">
            <SettingRow title="Daily reminder" description="Remind me to keep my streak going">
              <Toggle label="Daily reminder" checked={reminders.daily} onChange={(v) => setReminder("daily", v)} />
            </SettingRow>
            <SettingRow title="Reminder time" description="Choose your usual study time">
              <label className="time-input">
                <Clock3 size={17} />
                <input type="time" value={reminders.time} onChange={(e) => setReminder("time", e.target.value)} />
              </label>
            </SettingRow>
            <SettingRow title="Email reminders" description="Receive a daily study prompt">
              <Toggle label="Email reminders" checked={reminders.email} onChange={(v) => setReminder("email", v)} />
            </SettingRow>
            <SettingRow title="Browser notifications" description="Show reminders on this device">
              <Toggle
                label="Browser notifications"
                checked={reminders.browser}
                onChange={(v) => {
                  setReminder("browser", v);
                  toast(v ? "Browser notifications enabled" : "Browser notifications disabled");
                }}
              />
            </SettingRow>
          </SettingsSection>

          <SettingsSection
            className="danger-section"
            icon={LogOut}
            title="Sign out"
            description="You can log back in at any time."
          >
            <Button
              variant="danger"
              onClick={() => {
                logout();
                toast("Signed out");
              }}
            >
              Sign out
            </Button>
          </SettingsSection>
        </div>
        <LevelCard xp={stats.xp} streak={stats.streak} />
      </div>
    </div>
  );
}
