import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Save } from 'lucide-react';
import { useState } from 'react';

export function Builder() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('EIP');
  const [category, setCategory] = useState('Core');
  const [content, setContent] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Proposal Builder</h1>
          <p className="text-muted-foreground">
            Create and edit Ethereum Improvement Proposals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <FileText className="h-4 w-4" />
            Preview
          </Button>
          <Button className="gap-1">
            <Save className="h-4 w-4" />
            Save Draft
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-6">
        {/* Metadata column */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Proposal Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter a title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select value={type} onValueChange={setType}>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EIP">EIP</SelectItem>
                        <SelectItem value="ERC">ERC</SelectItem>
                        <SelectItem value="RIP">RIP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Core">Core</SelectItem>
                        <SelectItem value="Networking">Networking</SelectItem>
                        <SelectItem value="Interface">Interface</SelectItem>
                        <SelectItem value="ERC">ERC</SelectItem>
                        <SelectItem value="Meta">Meta</SelectItem>
                        <SelectItem value="Informational">Informational</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="authors">Authors</Label>
                  <Input id="authors" placeholder="Enter authors (comma separated)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discussions-to">Discussions-to</Label>
                  <Input id="discussions-to" placeholder="Discussion URL" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="review" disabled>Review</SelectItem>
                      <SelectItem value="last-call" disabled>Last Call</SelectItem>
                      <SelectItem value="final" disabled>Final</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Editor column */}
        <div className="lg:col-span-4">
          <Tabs defaultValue="write">
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="write" className="flex-1">Write</TabsTrigger>
              <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="write">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="abstract">Abstract</Label>
                      <Textarea
                        id="abstract"
                        placeholder="A short (~200 word) description of the technical issue being addressed."
                        className="min-h-24"
                      />
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        placeholder="Write your proposal content in Markdown format..."
                        className="min-h-[400px] font-mono"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        Supports Markdown formatting. Use # for headings, * for lists, etc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="preview">
              <Card>
                <CardContent className="prose dark:prose-invert max-w-none pt-6">
                  <div className="rounded-lg border p-4">
                    <h2 className="mb-4 text-xl font-bold">
                      {title || 'Your Proposal Title Will Appear Here'}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <div className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {type}
                      </div>
                      <div className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {category}
                      </div>
                      <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        Draft
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="prose-sm">
                      {content ? (
                        <div dangerouslySetInnerHTML={{ __html: '<p>' + content.replace(/\n/g, '</p><p>') + '</p>' }} />
                      ) : (
                        <p className="text-muted-foreground">Preview of your proposal will appear here...</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}