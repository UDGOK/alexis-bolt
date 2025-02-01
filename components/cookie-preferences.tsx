"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Switch } from './ui/switch';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

interface CookiePreferencesProps {
  onSave: (preferences: CookiePreferences) => void;
}

export function CookiePreferences({ onSave }: CookiePreferencesProps) {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  const handleToggle = (key: keyof CookiePreferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onSave(preferences);
    setOpen(false);
  };

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Customize
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Necessary Cookies</span>
              <Switch checked={preferences.necessary} disabled />
            </div>
            <div className="flex items-center justify-between">
              <span>Analytics Cookies</span>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={() => handleToggle('analytics')}
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Marketing Cookies</span>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={() => handleToggle('marketing')}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>Save Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}