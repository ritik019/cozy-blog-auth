
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to sign in if no user is logged in
  React.useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);
  
  if (!user) {
    return null; // Will redirect in the effect
  }
  
  const handleSignOut = () => {
    signOut();
    navigate('/');
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-medium mb-8">Your Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile sidebar */}
        <div className="md:col-span-1">
          <Card className="glass">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://i.pravatar.cc/150?img=68" />
                  <AvatarFallback className="text-xl">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
                <Separator className="my-2" />
                <Button 
                  variant="outline"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50" 
                  size="sm"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Profile content */}
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  <dt className="text-sm text-muted-foreground">Full Name</dt>
                  <dd>{user.name}</dd>
                </div>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  <dt className="text-sm text-muted-foreground">Email</dt>
                  <dd>{user.email}</dd>
                </div>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  <dt className="text-sm text-muted-foreground">Account Created</dt>
                  <dd>June 1, 2023</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You haven't published any articles yet. Start creating content to see your activity.
              </p>
              <Button className="mt-4">Create Article</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
