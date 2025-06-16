'use client';
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface TransactionData {
    transactions: any[];
}

export default function TransactionTab({ transactions }: TransactionData) {

    const {t} = useTranslation('Hrm');
    
   return (
    <TabsContent value="transactions" className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold dark:text-white">{t('transactionHistory')}</h3>
      <Button variant="outline" size="sm">
        <Download className="h-4 w-4 mr-2" />
        {t('export')}
      </Button>
    </div>
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <Card key={transaction.id} className="border shadow-sm dark:bg-black dark:border-green-900">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-medium dark:text-white">{transaction.course}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold dark:text-white">${transaction.amount}</p>
                <Badge
                  variant={transaction.status === "completed" ? "default" : "destructive"}
                  className="mt-1"
                >
                  {transaction.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </TabsContent>
   );
}
