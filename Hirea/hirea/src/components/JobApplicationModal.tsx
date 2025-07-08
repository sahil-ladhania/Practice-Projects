import { Plus, Upload } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';

export const JobApplicationModal = ({ isOpen, onClose, job }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Application submitted for:', job.title);
      onClose();
    };
  
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Apply for this Job</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="e.g., Jane Doe"
                required
              />
            </div>
  
            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
  
            {/* LinkedIn Profile URL */}
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
  
            {/* Resume Upload */}
            <div className="space-y-2">
              <Label>Resume</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Upload className="w-6 h-6 text-gray-400" />
                    <Plus className="w-3 h-3 text-gray-400 -ml-1 -mt-1" />
                  </div>
                  <div className="text-sm">
                    <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                      Upload a file
                    </span>
                    <span className="text-gray-500"> or drag and drop</span>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                </div>
              </div>
            </div>
  
            {/* Footer */}
            <div className="flex justify-end space-x-3 pt-6">
              <Button 
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button type="submit">
                Submit Application
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
};