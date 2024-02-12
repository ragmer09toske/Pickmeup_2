
import Languege from "@/components/Languege";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Box, ChevronDown, MoveDown } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="p-5 flex flex-col items-center gap-4">
      <Nav />
      <section className="py-2 flex flex-col gap-8 items-center text-center">
          <p className="text-primary">Your trip payment</p>
      </section>
      <div className="flex flex-col gap-4">
        <Languege />
        <div className="flex gap-8">
          <Card className="flex p-10 flex-col items-center">
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name">Mpesa Names</label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name">Number</label>
                    <Input id="name" type="number" placeholder="Your Mpesa number" />
                  </div>
                  <Button 
                    variant="outline"
                  >
                    <Link href="/users">
                      Pay
                    </Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
        <Card className="flex p-10 flex-col items-center">
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Pick-up location</label>
                  <Input id="name" placeholder="pick-up" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Drop-Off location</label>
                  <Input id="name" placeholder="drop-off" />
                </div>
                  <Button variant="outline">Continue</Button>
              </div>
            </form>
          </CardContent>
        </Card>
    </main>
  );
}
