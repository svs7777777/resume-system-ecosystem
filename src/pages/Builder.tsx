import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Download, Eye, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}

const Builder = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: "1", title: "", company: "", duration: "", description: "" },
  ]);

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: "",
      company: "",
      duration: "",
      description: "",
    };
    setExperiences([...experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleDownload = () => {
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Button variant="hero" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Editor Panel */}
          <div className="space-y-6">
            <Card className="p-6 border-border bg-card">
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    placeholder="Brief overview of your professional background..."
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="mt-1.5 min-h-[100px]"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Work Experience</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addExperience}
                >
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="space-y-4 pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-muted-foreground">Experience {index + 1}</h3>
                      {experiences.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeExperience(exp.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      )}
                    </div>
                    <div>
                      <Label>Job Title</Label>
                      <Input
                        placeholder="Software Engineer"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label>Company</Label>
                      <Input
                        placeholder="Tech Corp"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Input
                        placeholder="Jan 2020 - Present"
                        value={exp.duration}
                        onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        placeholder="Describe your responsibilities and achievements..."
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Card className="p-8 border-border bg-card min-h-[600px]">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center pb-6 border-b border-border">
                  <h2 className="text-3xl font-bold text-foreground">
                    {name || "Your Name"}
                  </h2>
                  <div className="mt-2 flex justify-center gap-4 text-sm text-muted-foreground">
                    {email && <span>{email}</span>}
                    {phone && <span>•</span>}
                    {phone && <span>{phone}</span>}
                  </div>
                </div>

                {/* Summary */}
                {summary && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Professional Summary</h3>
                    <p className="text-sm text-foreground leading-relaxed">{summary}</p>
                  </div>
                )}

                {/* Experience */}
                {experiences.some((exp) => exp.title || exp.company) && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary">Work Experience</h3>
                    <div className="space-y-4">
                      {experiences.map((exp) => {
                        if (!exp.title && !exp.company) return null;
                        return (
                          <div key={exp.id} className="space-y-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-foreground">{exp.title || "Job Title"}</h4>
                                <p className="text-sm text-muted-foreground">{exp.company || "Company Name"}</p>
                              </div>
                              {exp.duration && (
                                <span className="text-sm text-muted-foreground">{exp.duration}</span>
                              )}
                            </div>
                            {exp.description && (
                              <p className="text-sm text-foreground leading-relaxed">{exp.description}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
