import { Upload, Star, Share2, FileText, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useUserAuth } from "@/hooks/use-user-auth";

export const ProfileSection = () => {
  const { userProfile } = useUserAuth();

  return (
    <section className="px-6 py-8 border-b border-border ">

      {/* Top Bar: Rankings (Left) and Profile (Right) */}
      <div className="flex items-center justify-between mb-12">
        {/* Left: Rankings */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-black bg-white -ml-3 first:ml-0"
              />
            ))}
          </div>
          <span className="text-xs font-bold tracking-wider ml-1">RANKING</span>
        </div>

        {/* Right: Profile */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Profile</span>
          <div className="w-10 h-10 rounded-full bg-muted border border-black flex items-center justify-center overflow-hidden">
            {userProfile?.profileImage ? (
              <img src={userProfile.profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </div>

      {/* Avatar Upload */}
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
          <Upload className="w-6 h-6 text-background" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">
          NAME <span className="text-muted-foreground">//</span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-black">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-xs font-bold bg-white">
              */*
            </div>
            <span className="font-bold text-sm">RATINGS</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">ADDRESS</span>
            <span className="font-mono text-sm">4567890......456789</span>
          </div>

          <Upload className="w-5 h-5 text-muted ml-auto cursor-pointer hover:text-foreground transition-colors" />
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="rounded-md">
            @MEDIA HANDLE
          </Badge>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <FileText className="w-4 h-4" />
            <span>BIO</span>
          </button>
        </div>
      </div>
    </section>
  );
};
