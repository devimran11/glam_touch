<?php

namespace App\Http\Controllers\Outlet;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use App\Models\ShowroomCredit ;
use App\Models\ShowroomCustomerDue ;
use App\Models\ShowroomDebit ;
use App\Models\ShowroomMoneyTransaction;

class AccountController extends Controller
{



    public function credits(Request $request){
            $showroom_id = session()->get('manager')['showroom_id'] ;
            $paginate=$request->item ?? 20;

            if($request->status=='all'){
                    $credits=ShowroomCredit::where('showroom_id',$showroom_id)->orderBy('id','DESC')->with('manager')->paginate($paginate);
                    return response()->json($credits);
             }

             if($request->status=='search'){
                $credits=ShowroomCredit::where('showroom_id',$showroom_id)->where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')->with('manager')
                                ->paginate($paginate);
                return response()->json($credits);
           }
            if($request->status=='filter'){

               if(!empty($request->start_date) && empty($request->end_date)){
                    $credits=ShowroomCredit::where('showroom_id',$showroom_id)->whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')->with('manager')
                                ->paginate($paginate);
                }else{
                    $credits=ShowroomCredit::where('showroom_id',$showroom_id)->whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')->with('manager')
                                ->paginate($paginate);
            }

                return response()->json($credits);

         }


    }



    public function creditItem($id){

           $showroom_id = session()->get('manager')['showroom_id'] ;
           $credit=ShowroomCredit::where('showroom_id',$showroom_id)->findOrFail($id);
           if($credit){
            return response()->json([
                'status' => 'SUCCESS',
                'credit' => $credit ,
            ]);
           }

    }


    public function creditStore(Request $request){

            $validatedData = $request->validate([
                'date'=>'required|before:tomorrow',
                'purpose' => 'required',
                'credit_in' => 'required',
                'amount' => 'required',
            ]);

            $credit =new ShowroomCredit();
            $credit->showroom_id = session()->get('manager')['showroom_id'];
            $credit->insert_manager_id =  session()->get('manager')['id'] ;
            $credit->credit_in = $request->credit_in;
            $credit->purpose = $request->purpose;
            $credit->amount = $request->amount;
            $credit->comment = $request->comment ?? null;
            $credit->date = $request->date;
            $credit->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "credit  inserted",
                ]);


        }




    public function creditUpdate(Request $request,$id){

        $showroom_id = session()->get('manager')['showroom_id'] ;
         $validatedData = $request->validate([
                'date'=>'required|before:tomorrow',
                'purpose' => 'required',
                'credit_in' => 'required',
                'amount' => 'required',
            ]);

            $credit =ShowroomCredit::where('showroom_id',$showroom_id)->findOrFail($id);
            $credit->credit_in = $request->credit_in;
            $credit->purpose = $request->purpose;
            $credit->amount = $request->amount;
            $credit->comment = $request->comment ?? null;
            $credit->date = $request->date;
            $credit->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "credit  updated",
                ]);


    }


    public function destroy_credit(Request $request, $id){

            $showroom_id = session()->get('manager')['showroom_id'] ;
            $credit=ShowroomCredit::where('showroom_id',$showroom_id)->findOrFail($id);
            $credit->delete();
            return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "credit  deleted",
                ]);

    }





    //start debit method
    public function debits(Request $request)
    {
            $showroom_id = session()->get('manager')['showroom_id'] ;
            $paginate=$request->item??20;
              if($request->status=='all'){
                    $debits=ShowroomDebit::where('showroom_id',$showroom_id)->orderBy('id','DESC')->with(['manager'])->paginate($paginate);
                    return response()->json($debits);
             }
             if($request->status=='search'){
                $debits=ShowroomDebit::where('showroom_id',$showroom_id)->where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')->with(['manager'])
                                ->paginate($paginate);
                return response()->json($debits);
         }
         if($request->status=='filter'){


            if(!empty($request->start_date) && empty($request->end_date)){
                $debits=ShowroomDebit::where('showroom_id',$showroom_id)->whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')->with(['manager'])
                                ->paginate($paginate);
            }else{
                $debits=ShowroomDebit::where('showroom_id',$showroom_id)->whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')->with(['manager'])
                                ->paginate($paginate);
            }

            return response()->json($debits);

         }

    }

    public function debitStore(Request $request){

        $showroom_id = session()->get('manager')['showroom_id'] ;
        $validatedData = $request->validate([
            'date'=>'required|before:tomorrow',
            'purpose' => 'required',
            'amount' => 'required',
            'debit_from'=>'required',
        ]);

        $debit = new ShowroomDebit();
        $debit->showroom_id = $showroom_id;;
        $debit->purpose = $request->purpose;
        $debit->debit_from=$request->debit_from;
        $debit->amount = $request->amount;
        $debit->comment = $request->comment ?? null;
        $debit->date = $request->date;
        $debit->insert_manager_id= session()->get('manager')['id'] ;
        $debit->save();
        return response()->json([
            'status' => 'SUCCESS',
            'message' => "debit created",
        ]);

    }


    public function debitItem($id)
    {
             $showroom_id = session()->get('manager')['showroom_id'] ;
            $debit=ShowroomDebit::where('showroom_id',$showroom_id)->find($id);
            if($debit){
             return response()->json([
                 'status' => 'SUCCESS',
                 'debit' => $debit ,
             ]);
            }
    }


    public function debitUpdate(Request $request,$id)
    {
            $showroom_id = session()->get('manager')['showroom_id'] ;
            $validatedData = $request->validate([
                'date'=>'required|before:tomorrow',
                'purpose' => 'required',
                'amount' => 'required',
                'debit_from' => 'required',
            ]);

            $debit =ShowroomDebit::where('showroom_id',$showroom_id)->find($id);
            $debit->purpose = $request->purpose;
            $debit->debit_from=$request->debit_from;
            $debit->amount = $request->amount;
            $debit->comment = $request->comment ?? null;
            $debit->date = $request->date;
            if ($debit->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "debit was successfully updated",
                ]);
        }
    }


    public function debitDelete($id)
    {
             $showroom_id = session()->get('manager')['showroom_id'] ;
            $debit=ShowroomDebit::where('showroom_id',$showroom_id)->find($id);
                $debit->delete();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "debit  deleted",
                ]);
    }










    public function getCustomerDue(Request $request)
    {
        $showroom_id = session()->get('manager')['showroom_id'] ;
          $paginate_item=$request->item ?? 20 ;
          $showroom_id=$showroom_id;;
          $due_customers=ShowroomCustomerDue::where('showroom_id',$showroom_id)->orderBy('id','desc')->where('amount','>',0)->with('sale')->paginate($paginate_item);
          return response()->json([
                "status" => "OK",
                "due_customers" => $due_customers ,
          ]);
    }


    public function  duePaid(Request $request,$id){

        $showroom_id = session()->get('manager')['showroom_id'] ;
        $customer_due=ShowroomCustomerDue::findOrFail($id);

        if($request->amount > $customer_due->amount){
            return response()->json('Due Amount '.$customer_due->amount.' But Request Amount '. $request->amount);
        }

        $customer_due->amount=$customer_due->amount - $request->amount;
        if($customer_due->save()){

          //create a credit.......
        $credit = new ShowroomCredit();
        $credit->purpose ="Due amount, Paid....";
        $credit->amount =$request->amount;
        $credit->comment ="customer due amount paid.... Extra Hint(Paid Amount: ". $request->amount.' Due Amount: '.($customer_due->amount+$request->amount);
        $credit->date =  date('Y-m-d');
        $credit->credit_in=$request->paid_by;
        $credit->showroom_id = $showroom_id;;
        $credit->insert_manager_id= session()->get('manager')['id'] ;
        $credit->save();
         return response()->json([
                'status' => 'SUCCESS',
                'message' => 'paid successfully',
                'due'=>$customer_due
            ]);
        }
    }

    public function transferMoney(){

        $showroom_id = session()->get('manager')['showroom_id'] ;
        $transferMoney = ShowroomMoneyTransaction::where('showroom_id',$showroom_id)->orderBy('id','desc')->get();
        return response()->json($transferMoney);

    }

    public function addTransferMoney(Request $request)
    {
        $showroom_id = session()->get('manager')['showroom_id'] ;
        $validatedData = $request->validate([
            'amount' => 'required',
        ]);
        $showroom_id = $showroom_id;;
        $transfer = new ShowroomMoneyTransaction();
        $transfer->amount = $request->amount;
        $transfer->transaction_id = $request->transaction_id;
        $transfer->showroom_id = $showroom_id;
        $transfer->save();
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'transfer successfully'
        ]);


    }









}
